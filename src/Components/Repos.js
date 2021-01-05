import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
    const [repos, setRepos] = useState([]);

    const fetchRepo = async () => {
        const response = await axios.get(repos_url);
        const data = response.data;
        setRepos(data);
    }

    useEffect(() => {
        fetchRepo();
    }, [repos_url])

    return (
        <ListGroup>
            {repos.map(repo => {
                return <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-seconday">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
            })}
        </ListGroup>
    )


}

export default Repos;