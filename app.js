var vue = new Vue({
    el: '#app',
    data: {
        title:"Client tweet by Salvatore Bonaccorso",
        tweets: [],
        author:"",
        message:"",
        Id:""
    },
    methods: {
        // function see all Tweet
        view: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets';
            this.$http.get(url)
            .then(response => {
                console.log("response:", JSON.stringify(response.body));
                this.tweets = response.body;
                return this.tweets;
            })
        },
        // function 1 step
        newTweet:function(){    
            this.$http.post('https://fake-tweets-api.herokuapp.com/tweets',{
                author:this.author,
                message:this.message
            })
            .then(response => { console.log(response)})
            .catch(error => { console.log("Post error") })
        },        
        // function 2 step
        removeTweet: function(){
            this.$http.delete('https://fake-tweets-api.herokuapp.com/tweets/' + this.Id, {
            Id:this.Id
            })
            .then(response => { console.log(response)})
            .catch(error => { console.log("Delete error") })
        },
        // function 3 step
        showAuthor: function() {
            this.$http.get('https://fake-tweets-api.herokuapp.com/tweets?author=' +this.author, {
                author:this.author          
            })
            .then(response => { 
                this.tweets = response.body;
                console.log(response)
            })
            .catch(error => { console.log("Get error") })
        },
        // function 4 step
        showWord: function(){
            this.$http.get('https://fake-tweets-api.herokuapp.com/tweets?word=' +this.message, {
                message:this.message          
            })
            .then(response => { 
                this.tweets = response.body;
                console.log(response)
            })
            .catch(error => { console.log("Get error") })
        },
        // function 5 step
        readTweetById: function(){
            this.$http.get('https://fake-tweets-api.herokuapp.com/tweets/' +this.Id, {
                Id:this.Id          
            })
            .then(response => { 
                this.tweets = response.body;
                console.log(response)
            })
            .catch(error => { console.log("Get error") })
        }, 
        created: function() {
            this.view();          
        }        
    }
})