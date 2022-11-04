import Layout from "../components/layout";
import React, {useEffect, useState} from "react";
import Modal from "../components/modal";

export default function HomePage() {
    const [total, setTotal] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [percent, setPercent] = useState<number>(0);

    const multiplyByPercentage = (number: number, percentage: number): number => {
        return number * percentage / 100;
    }

    const calculateDifference = (number: number, percentage: number): number => {
        return number - multiplyByPercentage(number, percentage);
    }

    // handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === "total") {
            setTotal(parseInt(value));
        } else if (name === "number") {
            setNumber(parseInt(value));
        } else if (name === "percent") {
            setPercent(parseInt(value));
        }
    }

    // @ts-ignore
    const onSubmit = (e) => {
        e.preventDefault();
        setTotal(calculateDifference(number, percent));
    }

    // function to reset the form with escape key
    const resetForm = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            setTotal(0);
            setNumber(0);
            setPercent(0);
        }
    }

    // useEffect to reset the form with escape key
    // @ts-ignore
    useEffect(() => {
        // @ts-ignore
        window.addEventListener("keydown", resetForm);
        return () => {
            // @ts-ignore
            window.removeEventListener("keydown", resetForm);
        };
    });
    // @ts-ignore
    return (
        <Layout>
            <div className="home-container">
                {/* Input */}
                <div className="input-container">
                    <form onSubmit={onSubmit}>
                        <input type="number" placeholder="Enter a number" name={'number'} value={number || ""}
                               onChange={(e) => handleInputChange(e)}/>
                        <input type="number" placeholder="Enter a percentage" name='percent' value={percent || ""}
                               onChange={(e) => handleInputChange(e)}/>
                    </form>
                    <button className='btn-primary' onClick={onSubmit}>
                        Calculate
                    </button>
                    <Modal>
                        <h1>
                            Hello World!
                        </h1>
                    </Modal>
                </div>

                {/* Result */}
                <div className="result-container">
                    <div className="result">
                        <h3>Result</h3>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


