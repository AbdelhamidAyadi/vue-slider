var app = new Vue({
    el: '#root',
    data: {
        images: [
            './asset/img/inception.jpg',
            './asset/img/interstellar.jpg',
            './asset/img/pulp_fiction.jpg',
            './asset/img/taxi_driver.jpg',
            './asset/img/the_dark_knight.jpg',
            './asset/img/the_god_father.jpg',
            './asset/img/the_lord_of_the_rings.jpg'
        ],
        number: 0,

    },
    created(){
        setInterval(this.slideSwitchRight, 3000);
    },
    methods: {
        slideSwitchRight: function () {
            let test = document.querySelectorAll(".dot")
            this.number++
            if (this.number >= this.images.length) {
                this.number = 0
                test[this.images.length - 1].classList.remove("blue")
                test[0].classList.add("blue")
            }
            test[this.number - 1].classList.remove("blue")
            test[this.number].classList.add("blue")
        },
        slideSwitchLeft: function () {
            let test = document.querySelectorAll(".dot")
            this.number--
            if (this.number < 0) {
                this.number = this.images.length - 1
                test[0].classList.remove("blue")
                test[this.images.length - 1].classList.add("blue")
            }
            
            test[this.number + 1].classList.remove("blue")
            test[this.number].classList.add("blue")
        }
    }
});