const pagination = document.getElementById("pagination");
function goToPage(el) {
  const buttons = document.querySelectorAll(".pagination li");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  el.classList.add("active");
}


// Get all select elements
var selectElements = document.querySelectorAll('select');

selectElements.forEach(function (selectElement) {
  // Cache the number of options
  var numberOfOptions = selectElement.children.length;

  // Hide the select element
  selectElement.classList.add('s-hidden');

  // Wrap the select element in a div
  var selectWrapper = document.createElement('div');
  selectWrapper.classList.add('select-el');
  selectElement.parentNode.insertBefore(selectWrapper, selectElement);
  selectWrapper.appendChild(selectElement);

  // Insert a styled div to sit over the top of the hidden select element
  var styledSelect = document.createElement('div');
  styledSelect.classList.add('styledSelect');
  selectElement.insertAdjacentElement('afterend', styledSelect);

  // Show the first select option in the styled div
  styledSelect.textContent = selectElement.children[0].textContent;

  // Insert an unordered list after the styled div and also cache the list
  var list = document.createElement('ul');
  list.classList.add('options');
  styledSelect.insertAdjacentElement('afterend', list);

  // Insert a list item into the unordered list for each select option
  for (var i = 0; i < numberOfOptions; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = selectElement.children[i].textContent;
    listItem.setAttribute('rel', selectElement.children[i].value);
    list.appendChild(listItem);
  }

  // Cache the list items and convert to an array
  var listItems = Array.from(list.children);

  // Show the unordered list when the styled div is clicked
  // Also hides it if the div is clicked again
  styledSelect.addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelectorAll('div.styledSelect.active').forEach(function (el) {
      el.classList.remove('active');
      el.nextElementSibling.style.display = 'none';
    });
    this.classList.toggle('active');
    this.nextElementSibling.style.display = this.classList.contains('active') ? 'block' : 'none';
  });

  // Hide the unordered list when a list item is clicked
  // Update the styled div to show the selected list item
  // Update the select element to have the value of the equivalent option
  listItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      styledSelect.textContent = this.textContent;
      styledSelect.classList.remove('active');
      selectElement.value = this.getAttribute('rel');
      list.style.display = 'none';
      // Uncomment the line below for demonstration
      // alert(selectElement.value);
    });
  });

  // Hide the unordered list when clicking outside of it
  document.addEventListener('click', function () {
    styledSelect.classList.remove('active');
    list.style.display = 'none';
  });
});
