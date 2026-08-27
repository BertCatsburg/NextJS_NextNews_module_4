import sql from 'better-sqlite3';
import {NewsItemType} from '@/types';

const db = sql('data.db'); // Location seen from the root project folder.

export async function getAllNews() {
    const news: NewsItemType[] = db.prepare('SELECT * FROM news').all() as NewsItemType[];
    await new Promise((resolve) => setTimeout(resolve, 500));
    return news
}

export async function getNewsItem(slug: string) {
    const newsItem: NewsItemType = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug) as NewsItemType;
    await new Promise((resolve) => setTimeout(resolve, 500));
    return newsItem;
}

export async function getLatestNews() {
    const latestNews: NewsItemType[] = db
        .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
        .all() as NewsItemType[];
    await new Promise((resolve) => setTimeout(resolve, 500));
    return latestNews;
}

export async function getAvailableNewsYears() {
    const years: { year: string }[] = db
        .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
        .all() as { year: string }[] // Returns: [ { year: '2021' }, { year: '2022' }, { year: '2024' } ]
    const uniqueYears: number[] = years.map((y) => {
        return parseInt(y.year)
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
    return uniqueYears;
}

export function getAvailableNewsMonths(year: number | undefined): number[] {
    if (!year) return [];

    const months: {month: string}[] = db
        .prepare(
            "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
        )
        .all(year.toString()) as {month: string}[]; // Returns (for 2022) : [ { month: '05' }, { month: '07' } ]
    return months.map((m: {month: string}) => {
        return parseInt(m.month)
    })
}

export async function getNewsForYear(year: number): Promise<NewsItemType[]> {
    const news:NewsItemType[] = db
        .prepare(
            "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
        )
        .all(year) as NewsItemType[];
    await new Promise((resolve) => setTimeout(resolve, 500));
    return news;
}

export async function getNewsForYearAndMonth(year: number, month:number): Promise<NewsItemType[]> {
    const monthAsString = month.toString().padStart(2, '0')
    const news:NewsItemType[] = db
        .prepare(
            "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
        )
        .all(year.toString(), monthAsString) as NewsItemType[]
    console.log(`Passed Month: ${monthAsString} and Year: ${year}`)
    await new Promise((resolve) => setTimeout(resolve, 500));
    return news;
}

export const getMonthName = (month: number) => {

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    if (month >= 0 && month <= 12) {
        return months[month - 1]
    } else {
        return 'Unknown'
    }
}