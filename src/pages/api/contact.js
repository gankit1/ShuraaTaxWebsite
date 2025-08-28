export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phone, service, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        message: "Missing required fields",
        errors: {
          firstName: !firstName ? "First name is required" : null,
          lastName: !lastName ? "Last name is required" : null,
          email: !email ? "Email is required" : null,
          message: !message ? "Message is required" : null,
        },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send auto-response email

    // For demo purposes, we'll just log the data
    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real application, you might want to:
    // - Send an email using services like SendGrid, Nodemailer, or AWS SES
    // - Save to a database like MongoDB, PostgreSQL, or Firebase
    // - Integrate with CRM systems like HubSpot, Salesforce, etc.
    // - Send notifications to Slack or other team communication tools

    return res.status(200).json({
      message: "Message sent successfully",
      data: {
        id: `contact_${Date.now()}`,
        status: "received",
        estimatedResponse: "24 hours",
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Something went wrong",
    });
  }
}
