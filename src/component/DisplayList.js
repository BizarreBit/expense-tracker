import ListItem from "./ListItem";

function DisplayList() {
    return(
        <ul className="list-group">
            <ListItem />
            <ListItem />
            <ListItem />
        </ul>
    );
}

export default DisplayList;