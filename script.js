// Add JavaScript functionality here, if needed
// For example, you can implement interactive features or form validation
function loadContent(contentType) {
  var contentContainer = document.getElementById("content-container");
  var content = "";

  switch (contentType) {
    case "home":
      content =
        "<h2>Welcome to the Civil Symposium!</h2><p>Join us to explore the latest advancements in civil engineering. This is the Home section.</p>";
      break;
    case "about":
      content =
        "<h2>About the Symposium</h2><p>Welcome to the Civil Symposium, where experts gather to discuss the latest advancements in civil engineering. This is the About section.</p>";
      break;
    case "contact":
      content =
        "<h2>Contact Us</h2><p>Feel free to contact us for any inquiries or information. This is the Contact section.</p>";
      break;
    default:
      content =
        "<h2>Welcome to the Civil Symposium!</h2><p>Join us to explore the latest advancements in civil engineering. This is the Home section.</p>";
      break;
  }

  contentContainer.innerHTML = content;
}
