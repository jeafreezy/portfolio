
import Parser from 'rss-parser';


export const SPATIALNODE_RSS_FEED_URL = 'https://spatialnode.net/emmanuel/rss.xml'
export const MEDIUM_RSS_FEED_URL = 'https://medium.com/@jolaiyaemmanuel/feed'
export const HASHNODE_RSS_FEED_URL = 'https://jeafreezy.hashnode.dev/rss.xml'

const parser = new Parser();
/**
 *This function retrieves the XML from the RSS feed and parses it using rss-parser lib.
 *
 * url: The url to the rss feed.
 *
 * @returns: The parsed rss feed.
 */
async function fetchAndParseRSSFeed(url:string) {
    try {
        const response = await fetch(url);
        const xml = await response.text();
        const feed = await parser.parseString(xml);
        const data = feed.items;
        return data 
    } catch {
        return null 
    }
}


export const AppService ={
    fetchAndParseRSSFeed
}
