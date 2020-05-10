import React, { Component } from "react";
import Url from "url-parse";
import Links from "../data/Links";
import encode from "../algorithm/stringShortener";

class AddUrl extends Component {
    state = {
        url: "",
        encodeNumber: 101021,
        munchList: Links,
        key: "",
        color: ["orange", "black", "lightpurple", "pink", "yellow", "darkred"],
        currentColor: "orange",
        isLoading: false,
    };

    urlHandler = (e) => {
        let str = e.target.value

        this.setState({ url: str });

    };

    colorPicker = () => {
        let randomColor = this.state.color[
            Math.floor(Math.random() * this.state.color.length)
        ];
        return this.setState({
            currentColor: randomColor,
        });
    };

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            });
        }, 4000);
    }

    submitHandler = (e) => {
        e.preventDefault();
        const key = encode(this.state.encodeNumber);

        let urlStr = ''
        if (!this.state.url.includes('https://')) {
            urlStr = 'https://' + this.state.url
        } else {
            urlStr = this.state.url
        }

        this.setState({
            munchList: [
                {
                    key: key,
                    link: urlStr,
                    id: this.state.encodeNumber,
                    color: this.state.currentColor,
                },
                ...this.state.munchList,
            ],
            encodeNumber: this.state.encodeNumber + 531,
            isLoading: true,
            url: ''
        });
        console.log(this.state.munchList)
        this.colorPicker();

    };

    AddUrlHanlder = (e) => {
        this.submitHandler(e);
    };
    render() {
        let parser = Url;
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <input
                        value={this.state.url}
                        className="addUrl"
                        onChange={this.urlHandler}
                        type="text"
                        placeholder="Enter Url To Munch eg. https://www.epicgames.com/..."
                    />
                    <button className="addurl-btn" onClick={this.AddUrlHanlder}>
                        Munch
                    </button>
                </form>
                <h2>list of Url's Around The Web</h2>
                <h3>
                    See Where It Goes
                    <span role="img" aria-label="silly-face">
                        🤪
                    </span>
                </h3>
                <hr />
                {this.state.isLoading ? (
                    <>
                        <h4>
                            Simulation begin...
                            <span role="img" aria-label="silly-face">
                                😴
                            </span>
                        </h4>
                        <div className="loader"></div>
                    </>
                ) : (
                        <ol className="container" reversed>
                            {this.state.munchList.map(
                                ({ id, link, color, key }) => {
                                    parser = new Url(link);

                                    return (
                                        <li key={id}>
                                            <h5>
                                                {parser.hostname.replace(
                                                    "www.",
                                                    ""
                                                )}
                                            </h5>


                                            <a rel="noopener noreferrer"
                                                target="_blank"
                                                href={link}
                                            >
                                                <button className={`url-btn ${color}`}>
                                                    {`Munch.ly/${key}`}
                                                </button>
                                            </a>
                                        </li>
                                    );
                                }
                            )}
                        </ol>
                    )}
            </>
        );
    }
}
export default AddUrl;
