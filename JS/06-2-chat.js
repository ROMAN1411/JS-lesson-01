/** Напиши скрипт, який перевіряє можливість відкриття чату з користувачем.
 *
 * Для цього користувач має бути:
 * - другом
 * - онлайн
 * - без режиму "не турбувати"
 */

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;

console.log('Можливо відкрити чат?', canOpenChat);
