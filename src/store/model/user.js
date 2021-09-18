
export function User() {

    let name = null;

    const setName = (_name) => {
        name = _name
    }

    const getName = () => name;

    return {
        setName,
        getName
    }
}
