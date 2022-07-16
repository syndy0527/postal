// Postallist.jsx
import { useState, useEffect } from "react";
export const Postallist = ({ eria, getData }) => {
    const [PostalData, setPostalData] = useState(null);

    useEffect(() => {
        getData?.(eria).then((response) =>
            setPostalData(response)
        );
    }, [eria, getData]);
    console.log(PostalData);
    return (
        <ul>
            {PostalData?.data.response.location.map((x, index) => (
                <li key={index}>{x.postal}/{x.town}</li>
            ))}
        </ul>
    );
};
