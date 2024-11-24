const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // طباعة مكدس الأخطاء إلى وحدة التحكم لمزيد من التحقيق
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === 'production' ? null : err.stack // لا تعرض مكدس الأخطاء في الإنتاج لأسباب أمانية
    });
};

export default errorHandler;
