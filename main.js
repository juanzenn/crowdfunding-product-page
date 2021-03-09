// Menu on mobile show/hide
$("#hamburger").click(function(){
  if ($("#navbar").is(":visible")) {
    $("#navbar").hide('slow')
  } else {
    $("#navbar").show(400)
  }  
  $(".toggle-nav").toggle() 
})

// Bookmarked
$("#bookmark").click(function() {
 $('.toggle-bookmark').toggle()
})

// Modal
$("#default-modal").click(function() {
  $("#modal").show(500);
  $("#backdrop").show();
})
$("#close-modal").click(function() {
  $("#modal").hide(500)
  $("#backdrop").hide()
  $('.non-selected').show()
  $('.selected').hide()
})

// Modal states
// no-reward
$('.no-reward').click(function() {
  $('.non-selected').show()
  $('.selected').hide()
  $('.no-reward').toggle()
})
// bamboo-stand
$('.bamboo-stand').click(function() {
  $('.non-selected').show()
  $('.selected').hide()  
  $('.bamboo-stand').toggle()
})
// black-stand
$('.black-stand').click(function() {
  $('.non-selected').show()
  $('.selected').hide()  
  $('.black-stand').toggle()
})

// Information section buttons
// for the black-edition
$('#black-edition-btn').click(function() {
  $("#modal").show(500)
  $("#backdrop").show()
  $('.black-stand').toggle()
})
// for the bamboo-stand
let bambooBtn = $('#bamboo-stand-btn')
bambooBtn.click(function() {
  $("#modal").show(500)
  $("#backdrop").show()
  $('.bamboo-stand').toggle()
})

// Submit form
let btnForm = $('.submit-test')
btnForm.click(function() {
  let successModal = $('#success')
  successModal.show(600)
  $('.no-reward').hide(300)
  $('.bamboo-stand').hide(300)
  $('.black-stand').hide(300)
  $('.mahogany').hide(300)
  $('.modal-heading').hide(300)
  $('#close-modal').hide(300)
  $("#backdrop").show()
})

let lastBtn = $('#last-btn')
lastBtn.click(function() {
  $('.non-selected').show()
  $('.selected').hide()
  $('.modal-heading').show()
  $("#backdrop").hide()
  $("#modal").hide()
  $('#close-modal').show()
  $('.mahogany').show()
  $('#success').hide()
})



