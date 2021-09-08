import "./styles.css";

if (document.readyState !== "loading") {
  console.log(document.readyState);
  initializePage();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("What");
    initializePage();
  });
}

function initializePage() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    const textArea = document.getElementById("text-area");
    const list = document.getElementById("list");
    let newItem = document.createElement("li");
    newItem.innerHTML = textArea.value;
    list.appendChild(newItem);
  });

  const removeCommentButton = document.getElementById("remove-comment");

  removeCommentButton.addEventListener("click", function () {
    let confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      let listItems = document.getElementsByTagName("li");
      while (listItems.length !== 0) {
        listItems[0].parentNode.removeChild(listItems[0]);
      }
    }
  });
}
