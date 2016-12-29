import SC from 'soundcloud'

export default {

    initialise() {
        SC.initialize({
            client_id: 'xxx',
            redirect_uri: 'http://example.com/callback'
        })
    },

    doThing() {

    }
}
