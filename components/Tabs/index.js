// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Make a request for a user with a given ID
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(function(response) {
    // handle success
    console.log(response);
    response.data.topics.forEach(key => {
      const tab = document.createElement("div");
      tab.textContent = key;
      tab.classList.add("tab");

      const topicContainer = document.querySelector(".topics");

      topicContainer.appendChild(tab);
    });
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });
