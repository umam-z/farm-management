const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      // Ambil semua pesan error validasi
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      return res.status(400).json({
        success: false,
        message: `Validasi gagal: ${errorMessage}`,
      });
    }

    next(); // Lanjut ke controller jika valid
  };
};

module.exports = validate;
