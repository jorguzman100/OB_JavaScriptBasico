// Simple string
new TypeIt("#simpleUsage", {
    strings: "This is a simple string.",
    speed: 50,
    waitUntilVisible: true,
}).go();

// Multiple lines
new TypeIt(".multipleStrings", {
    strings: ["This is a great string.", "But here is a better one."],
    speed: 50,
    waitUntilVisible: true,
}).go();

// Form
new TypeIt("#formElement", {
    strings: "Alex MacArthur",
    waitUntilVisible: true,
}).go();

// Rainbow
const instance = new TypeIt("#callback", {
    strings: ["Look, it's rainbow text!"],
    afterStep: function (instance) {
        instance.getElement().style.color = getRandomColor();
    },
}).go();