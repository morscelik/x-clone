import arcjet, { tokenBucket, shield, detectBot } from '@arcjet/node';
import { ENV } from './env.js';
import { connectDB } from './db.js';

export const aj = arcjet({
    key: ENV.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // shield protects your app from common attacks
        shield({ mode: 'LIVE' }),
        // botet detection
        detectBot({
            mode: 'LIVE',
            allow: [
                "CATEGORY:SEARCH_ENGINE",
                // allow legitimate search engine bots
                // see full list at https://github.com/arcjet/arcjet-js/blob/main/protocol/well-known-bots.ts
            ]
        })
        // rate limiting
        , tokenBucket({
            mode: 'LIVE',
            refillRate:10,// tokens per 10 seconds
            interval: 10, // seconds
            capacity: 20, // max tokens
        })
    ]

})
