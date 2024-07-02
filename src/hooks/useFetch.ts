import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url: string, method:string) => {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const config = {
            method: method,
            url: url
        }

        axios
        .request(config)
        .then(res => {
            setData(res.data);
        })
        .catch(error => {
            console.log(error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });

    }, []);

    return [data, error, isLoading];

}

export default useFetch;
