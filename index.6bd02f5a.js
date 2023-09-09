const heading = React.createElement("h1", {
    id: "heading"
}, "Hello welcome to world of react");
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I M H1 TAG"),
        React.createElement("h2", {}, "I M H2 TAG")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I M H1 TAG"),
        React.createElement("h2", {}, "I M H2 TAG")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
