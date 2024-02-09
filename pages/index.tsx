import Layout from "../components/layout";
import React, {useCallback, useEffect, useState} from "react";

export default function HomePage() {
    const [total, setTotal] = useState<number>(0);
    const [number, setNumber] = useState<number>(0);
    const [percent, setPercent] = useState<number>(0);

    /**
     * Function to multiply a number by a percentage
     * @param number
     * @param percentage
     * @returns number
     */
    const multiplyByPercentage = useCallback((number: number, percentage: number): number => {
        return (number * percentage) / 100;
    }, []);

    /**
     * Function to calculate the difference
     * @param number
     * @param percentage
     * @returns number
     */
    const calculateDifference = useCallback((number: number, percentage: number): number => {
        return number - multiplyByPercentage(number, percentage);
    }, [multiplyByPercentage]);

    /**
     * Function to handle input change
     * @param e
     * @returns void
     */
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

    /**
     * Function to handle form submit
     * @param e
     * @returns void
     */
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTotal(calculateDifference(number, percent));
    }

    /**
     * Function to reset the form with escape key
     * @param e
     * @returns void
     */
    const resetForm = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setTotal(0);
            setNumber(0);
            setPercent(0);
        }
    }

    /**
     * Function to handle enter key
     * @param e
     * @returns void
     */
    const handleEnterKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Enter") {
            setTotal(calculateDifference(number, percent));
        }
    }, [calculateDifference, number, percent]);

    /**
     * Effect to add event listeners
     */
    useEffect(() => {
        window.addEventListener("keydown", resetForm);
        window.addEventListener("keydown", handleEnterKey);
        return () => {
            window.removeEventListener("keydown", resetForm);
            window.removeEventListener("keydown", handleEnterKey);
        };
    }, [total, number, percent, handleEnterKey]);

    return (
        <Layout>
            <div className="home-container">
                {/* Input */}
                <div className="input-container">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor={'number'}>Number</label>
                        <input type="number" placeholder="#" name={'number'} value={number || ""}
                               onChange={(e) => handleInputChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor={'percent'}>Percent</label>
                        <input type="number" placeholder="%" name='percent' value={percent || ""}
                               onChange={(e) => handleInputChange(e)}/>
                        </div>

                    <button className='btn-primary' type={'submit'}>
                        Calculate
                    </button>
                    </form>
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


