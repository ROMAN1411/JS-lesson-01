/** Напиши скрипт перевірки підписки користувача при доступі до контенту
 *
 * -- Є три типи підписки: free, pro та vip.
 * -- Отримати доступ можуть тільки користувачі pro та vip.
 */

const sub = "free";

const canAccessContent = sub === "pro" || sub === "vip";

console.log("Є доступ до контенту", canAccessContent);
