import React, {useEffect} from "react";
import {Box, InfiniteScroll, Text} from "grommet";
import { useState } from "react";

const ITEMS: Array<number> = [];
const SIZE = 5;
while (ITEMS.length < 50) ITEMS.push(ITEMS.length);

export default function ListItem(): JSX.Element {

    const [currentItems, setCurrentItems] = useState<Array<number>>(ITEMS.slice(0, SIZE));
    const [currentPage, setCurrentPage] = useState(0);

    function getNext(): void {
        const lastElement = (currentPage + 1) * SIZE;
        console.log('lastElement', lastElement)
        if (lastElement < ITEMS.length) {
            setCurrentPage(currentPage + 1);
            setCurrentItems(ITEMS.slice(0, lastElement + SIZE)); //works
            // setCurrentItems(ITEMS.slice(lastElement, lastElement + SIZE)); // does not work
        }
    }

    useEffect(() => {
        console.log('currentItems', currentItems)
    }, [currentItems]);

    useEffect(() => {
        console.log('currentPage', currentPage)
    }, [currentPage]);

    return (
            <Box height="large" overflow="auto">
                <InfiniteScroll
                    items={currentItems}
                    step={5}
                    show={0}
                    onMore={() => getNext}
                >
                    {(item: number, index: number, ref: string) => (
                        <Box
                            height='800px'
                            key={index}
                            flex={false}
                            pad="medium"
                            background={`neutral-${(item % 2) + 1}`}

                        >
                            <Text>{item}</Text>
                        </Box>
                    )}
                </InfiniteScroll>
            </Box>
    )
}
