import axios from "axios";

const addSliderItem = async () => {
  try {
    const response = await axios.post("http://localhost:3007/api/slider", {
        image: "https://example.com/image.jpg",
      title: "New Slideer",
      description: "This is a new slider item"
    });

    console.log("Success:", response.data);
  } catch (error) {
    console.error("Error adding slider:", error);
  }
};

addSliderItem();
