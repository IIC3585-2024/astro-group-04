import { db, Comment } from 'astro:db';

export default async function() {

  await db.insert(Comment).values([
    { author: 'María', body: 'Hope you like Astro DB!' },
    { author: 'Lucía', body: 'Enjoy!'},
  ])
}