## What are some differences between interfaces and types in TypeScript?

TypeScript এর interface এবং type alias প্রায় একই কিন্তু কিছু পার্থক্য আছে:
### Interface:
* Interface মূলত object বা class এর structure define করতে ব্যবহৃত হয়।
* একাধিকবার declare করলে merge হয়।
* extends বা implements ব্যবহার করা যায়।
* শুধুমাত্র object type define করতে পারে।
* ভবিষ্যতে extend বা merge করতে, interface ব্যবহার করা হয়।

### Type:
* Type alias শুধু object নয়, primitive, union, tuple সব define করতে পারে।
* type alias এ extends করা যায়, কিন্তু class implement করতে পারবে না।
* primitive, union, tuple সব define করা যায়।
* union বা tuple type define করতে type ব্যবহার ভালো।

## Explain the difference between any, unknown, and never types in TypeScript.
### any:
* any মানে TypeScript এর type checking বন্ধ।
* আপনি এতে যে কোনো মান রাখতে পারেন এবং যে কোনো অপারেশন করতে পারেন।
* নিরাপদ নয়, তাই খুব বেশি ব্যবহার করা উচিত নয়।

### unknown:
* unknown হলো any এর নিরাপদ সংস্করণ।
* এতে যে কোনো মান assign করা যায়, কিন্তু সরাসরি ব্যবহার করা যায় না।
* Type check করার পরই ব্যবহার করতে হবে।

### never:
* never হলো এমন টাইপ যা কখনও কোনো মান ধারণ করে না।
* সাধারণত এমন ফাংশনের জন্য ব্যবহার হয় যা সবসময় error দেয় বা কখনও return করে না।

