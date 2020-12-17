var app = new Vue({
    el: '#app',
    data() {
        if ('alt' in window) {
            alt.on('data', (_data) => {this.data = _data})

            alt.on('switch_up', () => {
                this.switch_group(1)
            })
            alt.on('switch_down', () => {
                this.switch_group(-1)
            })
            alt.on('switch_left', () => {
                this.switch_location(-1)
            })
            alt.on('switch_right', () => {
                this.switch_location(1)
            })
        }

        return{
            data: [],
            page: 0,
            count: 0,
        }
    },

    methods: {
    switch_group(i){
            if (this.page + i < 0 || this.page == this.data.length) return;
            this.page += i;
            this.count = 0;
            alt.emit('lc:update', { page: this.page}) 
    },
    switch_location(i){
        if (this.count + i < 0 || this.count == this.data[this.page].array.length) return;
        this.count += i;
        alt.emit('lc:update', {page: this.page, count: this.count}) 
    } 
    }
})