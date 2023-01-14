import flats from "../data.js";

export const wantsTwoPerson = (req, res) => {
    const {category, want} = req.query;
    const sortedFlats = flats.filter((item) => {
        return item.category === want && item.want === category;
    });
    res.json(sortedFlats);
};

export const wantsThreePerson = (req, res) => {
    const {category: globaleCategory, want} = req.query;
    const sortedFirst = flats.filter((item) => {
        return item.category === want && item.want !== globaleCategory;
    });

    let sortedSecond = sortedFirst.map((first) => {
        const {id, location, price, rooms, category, want} = first;
        const filter = flats.filter((item) => {
            return item.category === want && item.want === globaleCategory;
        });
        if (filter.length > 0) {
            return {
                id,
                location,
                price,
                rooms,
                category,
                want,
                reference: filter,
            };
        } else return null;
    });

    //limit
    let counter = 0;
    sortedSecond = sortedSecond.map((item) => {
        let secondCounter = 0;
        const ref = item.reference.map((secondItem) => {
            if (secondCounter <= 4) {
                secondCounter += 1;
                return secondItem;
            } else return null;
        });
        if (counter <= 4) {
            counter += 1;
            return {...item, reference: ref};
        } else return null;
    });
    //without null
    sortedSecond = sortedSecond.filter((item) => {
        return item !== null;
    });
    res.json(sortedSecond);
};

export const wantsFourPerson = (req, res) => {
    const {category: globaleCategory, want} = req.query;
    const sortedFirst = flats.filter((item) => {
        return item.category === want;
    });

    const sortedSecond = sortedFirst.map((first) => {
        const {id, location, price, category, want} = first;
        const filter = flats.filter((item) => {
            return item.category === want;
        });
        return {
            id,
            location,
            price,
            category,
            want,
            reference: filter,
        };
    });
    const sortedThird = sortedSecond.map((second) => {
        const {id, location, price, category, want} = second;

        const thirdSort = second.reference.map((refItem) => {
            const {id, location, price, category, want} = refItem;
            const filter = flats.filter((item) => {
                return item.category === want && item.want === globaleCategory;
            });
            return {
                id,
                location,
                price,
                category,
                want,
                reference: filter,
            };
        });
        return {
            id,
            location,
            price,
            category,
            want,
            reference: thirdSort,
        };
    });
    res.json(sortedThird);
};

export const wantsFourMoney = (req, res) => {
    const {category, want} = req.query;
    const sortedFirst = flats.filter((item) => {
        return item.category === want;
    });
    const sortedSecond = sortedFirst.map((first) => {
        const {id, location, price, category, want} = first;
        const filter = flats.filter((item) => {
            return item.category === want;
        });
        return {
            id,
            location,
            price,
            category,
            want,
            reference: filter,
        };
    });
    const sortedThird = sortedSecond.map((second) => {
        const {id, location, price, category, want} = second;

        const thirdSort = second.reference.map((refItem) => {
            const {id, location, price, category, want, status} = refItem;
            const filter = flats.filter((item) => {
                return item.category === want && status;
            });
            return {
                id,
                location,
                price,
                category,
                want,
                reference: filter,
            };
        });
        return {
            id,
            location,
            price,
            category,
            want,
            reference: thirdSort,
        };
    });
    res.json(sortedThird);
};

export const getAllFlats = (req, res) => {
    res.json(flats);
};

export const getSortedFlats = (req, res) => {
    const {city, price, rooms} = req.query;

    if (!price && !rooms) {
        const sortedFlats = flats.filter((item) => {
            return item.location === city;
        });
        return res.json(sortedFlats);
    } else if (!city && !rooms) {
        const sortedFlats = flats.filter((item) => {
            return item.price === Number(price);
        });
        return res.json(sortedFlats);
    } else if (!city && !price) {
        const sortedFlats = flats.filter((item) => {
            return item.rooms === Number(rooms);
        });
        return res.json(sortedFlats);
    } else if (!city) {
        const sortedFlats = flats.filter((item) => {
            return item.rooms === Number(rooms) && item.price === Number(price);
        });
        return res.json(sortedFlats);
    } else if (!price) {
        const sortedFlats = flats.filter((item) => {
            return item.rooms === Number(rooms) && item.location === city;
        });
        return res.json(sortedFlats);
    } else if (!rooms) {
        const sortedFlats = flats.filter((item) => {
            return item.city === city && item.price === Number(price);
        });
        return res.json(sortedFlats);
    }
    const sortedFlats = flats.filter((item) => {
        return (
            item.location === city &&
            item.price === Number(price) &&
            item.rooms === Number(rooms)
        );
    });
    console.log(city + " " + Number(price) + " " + Number(rooms));
    res.json(sortedFlats);
};