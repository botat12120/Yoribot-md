import fetch from 'node-fetch';

// مهيكلة لتنظيم بيانات الرسائل لكل محادثة
let lastMessage = {};

let handler = async (m, { conn, text }) => {
    // التحقق من وجود نص المدخل
    if (!text) {
        throw "❌ يرجى كتابة نص للسؤال، على سبيل المثال: .بوت ما هي أركان الإسلام؟";
    }

    // إرسال رسالة انتظار للمستخدم
    try {
        await conn.sendMessage(m.chat, { text: "⏳ انتظر لحظة... 💭" }, { quoted: m });

        // استدعاء API لاسترجاع الإجابة
        const kurosakiApi = `https://kurosaki-api-3mk.osc-fr1.scalingo.io/api/ai/gpt4?q=${encodeURIComponent(text)}`;
        const response = await fetch(kurosakiApi);
        const res = await response.json();

        // التحقق من حالة الاستجابة
        if (res.status) {
            if (res.kurosaki) {
                // حفظ آخر رسالة
                lastMessage[m.chat] = text;

                // إرسال الإجابة والصورة إلى المستخدم
                await conn.sendFile(
                    m.chat,
                    'https://telegra.ph/file/2d4df0601b61da5e07be7.jpg',
                    'image.png',
                    res.kurosaki,
                    m,
                    { caption: `✨ الإجابة: ${res.kurosaki} ✨` }
                );
            } else {
                await conn.sendMessage(m.chat, "⚠️ لم يتم العثور على نتيجة مناسبة لإجابتك. حاول مرة أخرى.", { quoted: m });
            }
        } else {
            await conn.sendMessage(m.chat, "⚠️ حدث خطأ أثناء محاولة الحصول على الإجابة. الرجاء المحاولة لاحقاً.", { quoted: m });
        }
    } catch (error) {
        console.error(error);
        await conn.sendMessage(m.chat, "⚠️ فشل، الرجاء المحاولة في وقت لاحق.", { quoted: m });
    }
};

// استرجاع آخر رسالة عند الطلب
let lastMessageHandler = async (m, { conn }) => {
    const lastText = lastMessage[m.chat];
    if (!lastText) {
        await conn.sendMessage(m.chat, "ℹ️ لا توجد رسائل سابقة محفوظة.", { quoted: m });
    } else {
        await conn.sendMessage(m.chat, `📩 آخر رسالة أرسلتها كانت:\n\n${lastText}`, { quoted: m });
    }
};

handler.command = ['gpt4', 'بوت'];
handler.tags = ['ai'];
handler.help = ['gpt4 <النص> - للحصول على إجابة باستخدام GPT-4'];

lastMessageHandler.command = ['last', 'آخر'];
lastMessageHandler.tags = ['last'];
lastMessageHandler.help = ['last - استرجاع آخر رسالة أرسلتها'];

export { handler, lastMessageHandler };
