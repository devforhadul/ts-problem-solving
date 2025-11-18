
# Assignment 1: Typescript






#### What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type-এর প্রধান পার্থক্য হলো Declaration Merging অর্থাৎ একই নামের interface একাধিকবার লিখলে তা স্বয়ংক্রিয়ভাবে যুক্ত হয়ে যায় কিন্তু type এর ক্ষেত্রে এটি এরর দেখাবে। এছাড়া type ব্যবহার করে Union বা Tuple-এর মতো জটিল ডেটা টাইপ সহজে তৈরি করা যায়, যা interface দিয়ে সরাসরি করা সম্ভব নয়। সাধারণত লাইব্রেরি বা অবজেক্টের স্ট্রাকচার তৈরির জন্য interface এবং নির্দিষ্ট ডেটা লজিক তৈরির জন্য type বেশি ব্যবহৃত হয়।

#### Explain the difference between any, unknown, and never types in TypeScript.

TypeScript এ any, unknown, আর never এর পার্থক্য:
1. any যেকোনো টাইপ গ্রহণ করে
2. unknown  যেকোনো মান রাখতে পারে কিন্তু ব্যবহার করার আগে টাইপ-চেক করতে হয়।
3. never এমন মান বোঝায় যা কখনই ঘটবে না


