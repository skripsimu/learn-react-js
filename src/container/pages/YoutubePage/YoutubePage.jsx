import React, { Component, Fragment } from "react";
import Youtube from "../../../components/YoutubeComp/YoutubeComp"

class YoutubePage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube</p>
                <hr />
                <Youtube time="02.12" title="Senam Ceria" desc="2x ditonton. 1 hari yang lalu" />
                <Youtube time="04.12" title="Senam Lumayan Ceria" desc="112x ditonton. 2 hari yang lalu" />
                <Youtube time="05.12" title="Senam Agak Ceria" desc="1202x ditonton. 9 hari yang lalu" />
                <Youtube time="01.12" title="Senam Sambil Ceria" desc="200rbx ditonton. 1 minggu yang lalu" />
                <Youtube />
            </Fragment>
        )
    }
}

export default YoutubePage;