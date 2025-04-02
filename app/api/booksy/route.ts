"use server";

import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { Page } from "puppeteer-core";

export interface Testimonial {
  stars: number;
  service: string;
  staffer: string;
  reviewer: string;
  date: string;
  reviewText: string;
  photos: string[] | null;
}

export async function GET() {
  const booksyUrl =
    "https://booksy.com/pl-pl/117583_fox-clinic_medycyna-estetyczna_4353_piaseczno#ba_s=seo";

  let browser;
  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    );
    await page.goto(booksyUrl, { waitUntil: "networkidle2", timeout: 60000 });

    await page.waitForSelector('#reviews-section [data-testid="review-item"]', {
      timeout: 15000,
    });
    await autoScroll(page);

    const testimonials = await page.evaluate(() => {
      const reviews = Array.from(
        document.querySelectorAll(
          '#reviews-section [data-testid="review-item"]',
        ),
      );

      return reviews.map((review) => {
        // STAR RATING
        const stars = review.querySelectorAll(
          'div[data-testid="review-item"] > div:first-child div[style*="width: 28px; height: 28px;"]',
        ).length;

        // SERVICE AND STAFFER
        const service =
          review
            .querySelector('[data-testid="review-service"]')
            ?.textContent?.trim() || "";
        const staffer =
          review
            .querySelector('[data-testid="review-staffer"]')
            ?.textContent?.trim() || "";

        // REVIEWER AND DATE - NEW IMPROVED METHOD
        let reviewer = "";
        let date = "";

        // Method 1: Direct text parsing
        const reviewerDateContainer = review.querySelector(
          'div[class*="E9KQOPWS1B"]',
        );
        if (reviewerDateContainer) {
          const rawText = reviewerDateContainer.textContent?.trim() || "";
          const parts = rawText.split("•");
          if (parts.length > 1) {
            reviewer = parts[0].trim();
            date = parts[1].trim();
          }
        }

        // Method 2: DOM element fallback
        if (!reviewer || !date) {
          const spans = review.querySelectorAll(
            'div[class*="E9KQOPWS1B"] > span',
          );
          if (spans.length >= 2) {
            reviewer = spans[0].textContent?.replace("•", "").trim() || "";
            date = spans[1].textContent?.trim() || "";
          }
        }

        // REVIEW TEXT
        const reviewText =
          review
            .querySelector('div[class*="1KV69VGQK1FO"] > span:first-child')
            ?.textContent?.trim() || "";

        // PHOTOS
        const photos = Array.from(
          review.querySelectorAll('[data-testid="review-photo"]'),
        ).map((img) => (img as HTMLImageElement).src);

        return {
          stars: Math.min(5, stars),
          service,
          staffer,
          reviewer,
          date,
          reviewText,
          photos: photos.length > 0 ? photos : null,
        };
      });
    });

    return NextResponse.json({ testimonials });
  } catch (error) {
    console.error("Scraping error:", error);
    return NextResponse.json(
      {
        error: "Scraping failed",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  } finally {
    if (browser) await browser.close();
  }
}

async function autoScroll(page: Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 500;
      const timer = setInterval(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });
}
