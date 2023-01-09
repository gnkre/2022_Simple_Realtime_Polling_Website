var pollMembers = document.querySelectorAll('.poll-member')
var members = ['Left', 'Right']

pollMembers.forEach((pollMember, index) => {
  pollMember.addEventListener('click', (event) => {

    handlePoll(members[index])
  }, true)
})
function onLeft()
{
  handlePoll(members[0])
}
function onRight()
{
  handlePoll(members[1])
}
  // Sends a POST request to the server using axios
var handlePoll = function(member) {
  axios.post('https://test-2022-polling.herokuapp.com/vote', {member: member})
  .then((data) => {
    console.log('data sent')
  })
}

  
    // Configure Pusher instance
    var pusher = new Pusher('f38822c373812da34684', {
        cluster: 'ap3',
        encrypted: false
      });
      
      // Subscribe to poll trigger
      var channel = pusher.subscribe('poll');
      
      // Listen to vote event
      channel.bind('vote', function(data) {
        console.log(data)

        /*for (i = 0; i < (data.length - 1); i++) {
          var total = data[0].votes + data[1].votes + data[2].votes + data[3].votes
          document.getElementById(data[i].name).style.width = calculatePercentage(total, data[i].votes)
          document.getElementById(data[i].name).style.background = "#388e3c" 

      }*/
      });

      let calculatePercentage = function(total, amount){
        return (amount / total) * 100 + "%"
      }