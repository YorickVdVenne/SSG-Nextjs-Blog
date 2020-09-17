export function navBarCollapse() {
    const x = document.getElementById("topnav-collapse")
    if(x.className === "collapse navbar-collapse") {
        x.className += "collapse navbar-collapse show"
    } else {
        x.className = "collapse navbar-collapse"
    }
    const y = document.getElementById("navbar-toggler")
    if(y.className === "navbar-toggler-awesome fas fa-bars") {
        y.className += "navbar-toggler-awesome fas fa-times"
    } else {
        y.className = "navbar-toggler-awesome fas fa-bars"
    }
}