import { useEffect, useState } from "react";

declare var window: any;

export default function Main(): JSX.Element {
    const [isFetching, setIsFetching] = useState(false);

    return (
        <div className="pt-48 pl-96 grid grid-cols-2 gap-3 place-content-center h-35">
            <div className="grid grid-cols-2 gap-3 place-content-stretch h-35">hii</div>{" "}
        </div>
    );
}
