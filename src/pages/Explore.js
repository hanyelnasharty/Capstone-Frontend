import React from "react"
import { useState } from 'react';
import Alexandria from "../components/Alexandria";
import Alsharqiya from "../components/Alsharqiya";
import Aswan from "../components/Aswan";
import Assuit from "../components/Assuit";
import Beheira from "../components/Beheira";
import Benisuef from "../components/Benisuef";
import Cairo from "../components/Cairo";
import Dakahlia from "../components/Dakahlia";
import Damietta from "../components/Damietta";
import Fayoum from "../components/Fayoum";
import Gharbia from "../components/Gharbia";
import Giza from "../components/Giza";
import Ismailia from "../components/Ismailia";
import Kafr from "../components/Kafr";
import Matrouh from "../components/Matrouh";
import Minya from "../components/Minya";
import Menofia from "../components/Menofia";
import Northsinai from "../components/Northsinai";
import Portsaid from "../components/Portsaid";
import Qualyubia from "../components/Qualyubia";
import Qena from "../components/Qena";
import Redsea from "../components/Redsea";
import Sohag from "../components/Sohag";
import Southsinai from "../components/Southsinai";
import Suez from "../components/Suez";
import Luxor from "../components/Luxor";
import Newvalley from "../components/Newvalley";

const Explore = () => {

    const [alexandria, setAlexandria] = useState(true)
    const [aswan, setAswan] = useState(false)
    const [alsharqiya, setAlsharqiya] = useState(false)
    const [assuit, setAssuit] = useState(false)
    const [beheira, setBeheira] = useState(false)
    const [benisuef, setBenisuef] = useState(false)
    const [cairo, setCairo] = useState(false)
    const [dakahlia, setDakahlia] = useState(false)
    const [damietta, setDamietta] = useState(false)
    const [fayoum, setFayoum] = useState(false)
    const [gharbia, setGharbia] = useState(false)
    const [giza, setGiza] = useState(false)
    const [ismailia, setIsmailia] = useState(false)
    const [kafr, setKafr] = useState(false)
    const [matrouh, setMatrouh] = useState(false)
    const [minya, setMinya] = useState(false)
    const [menofia, setMenofia] = useState(false)
    const [newvalley, setNewvalley] = useState(false)
    const [northsinai, setNorthsinai] = useState(false)
    const [portsaid, setPortsaid] = useState(false)
    const [qualyubia, setQualyubia] = useState(false)
    const [qena, setQena] = useState(false)
    const [redsea, setRedsea] = useState(false)
    const [sohag, setSohag] = useState(false)
    const [southsinai, setSouthsinai] = useState(false)
    const [suez, setSuez] = useState(false)
    const [luxor, setLuxor] = useState(false)

    const alexandriaToggle = () => {
        setAlexandria(true)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const aswanToggle = () => {
        setAlexandria(false)
        setAswan(true)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const alsharqiyaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(true)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const assuitToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(true)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const beheiraToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(true)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const benisuefToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(true)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const cairoToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(true)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const dakahliaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(true)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const damiettaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(true)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const fayoumToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(true)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const gharbiaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(true)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const gizaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(true)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const ismailiaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(true)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

     const kafrToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(true)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const matrouhToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(true)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const minyaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(true)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const menofiaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(true)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const newvalleyToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(true)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const northsinaiToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(true)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const portsaidToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(true)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const qualyubiaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(true)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const qenaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(true)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

     const redseaToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(true)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const sohagToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(true)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(false)
    }

    const southsinaiToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(true)
        setSuez(false)
        setLuxor(false)
    }

    const suezToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(true)
        setLuxor(false)
    }

    const luxorToggle = () => {
        setAlexandria(false)
        setAswan(false)
        setAlsharqiya(false)
        setAssuit(false)
        setBeheira(false)
        setBenisuef(false)
        setCairo(false)
        setDakahlia(false)
        setDamietta(false)
        setFayoum(false)
        setGharbia(false)
        setGiza(false)
        setIsmailia(false)
        setKafr(false)
        setMatrouh(false)
        setMinya(false)
        setMenofia(false)
        setNewvalley(false)
        setNorthsinai(false)
        setPortsaid(false)
        setQualyubia(false)
        setQena(false)
        setRedsea(false)
        setSohag(false)
        setSouthsinai(false)
        setSuez(false)
        setLuxor(true)
    }
    return (
        <>
            <div className="container">
                <div className="govs">
                    {alexandria ? <Alexandria /> : null}
                    {alsharqiya ? <Alsharqiya /> : null}
                    {aswan ? <Aswan /> : null}
                    {assuit ? <Assuit /> : null}
                    {beheira ? <Beheira /> : null}
                    {benisuef ? <Benisuef /> : null}
                    {cairo ? <Cairo /> : null}
                    {dakahlia ? <Dakahlia /> : null}
                    {damietta ? <Damietta /> : null}
                    {fayoum ? <Fayoum /> : null}
                    {gharbia ? <Gharbia /> : null}
                    {giza ? <Giza /> : null}
                    {ismailia ? <Ismailia /> : null}
                    {kafr ? <Kafr /> : null}
                    {matrouh ? <Matrouh /> : null}
                    {minya ? <Minya /> : null}
                    {menofia ? <Menofia /> : null}
                    {newvalley ? <Newvalley /> : null}
                    {northsinai ? <Northsinai /> : null}
                    {portsaid ? <Portsaid /> : null}
                    {qualyubia ? <Qualyubia /> : null}
                    {qena ? <Qena /> : null}
                    {redsea ? <Redsea /> : null}
                    {sohag ? <Sohag /> : null}
                    {southsinai ? <Southsinai /> : null}
                    {suez ? <Suez /> : null}
                    {luxor ? <Luxor /> : null}
                </div>
           
            <div className="side-panel">
                <ul>
                    <div className="gov-list">
                        <img src="alex.png" alt="" className="flag"/><li className="side" onClick={alexandriaToggle}>Alexandria</li>
                    </div>
                    <div className="gov-list">
                        <img src="sharqia.png" alt="" className="flag"/><li className="side" onClick={alsharqiyaToggle}>Al-Sharqia</li>
                    </div>
                    <div className="gov-list">
                        <img src="assiut.png" alt="" className="flag"/><li className="side" onClick={assuitToggle}>Assuit</li>
                    </div>
                    <div className="gov-list">
                    <img src="aswan.png" alt="" className="flag"/><li className="side" onClick={aswanToggle}>Aswan</li>
                    </div>
                    <div className="gov-list">
                    <img src="behira.png" alt="" className="flag"/><li className="side" onClick={beheiraToggle}>Beheira</li>
                    </div>
                    <div className="gov-list">
                        <img src="benisuef.png" alt="" className="flag"/><li className="side" onClick={benisuefToggle}>Beni Suef</li>
                    </div>
                    <div className="gov-list">
                        <img src="cairo.png" alt="" className="flag"/><li className="side" onClick={cairoToggle}>Cairo</li>
                    </div>
                    <div className="gov-list">
                        <img src="dakahlia.png" alt="" className="flag"/><li className="side" onClick={dakahliaToggle}>Dakahlia</li>
                    </div>
                    <div className="gov-list">
                        <img src="damietta.png" alt="" className="flag"/><li className="side" onClick={damiettaToggle}>Damietta</li>
                    </div>
                    <div className="gov-list">
                        <img src="fayoum.png" alt="" className="flag"/><li className="side" onClick={fayoumToggle}>Fayoum</li>
                    </div>
                    <div className="gov-list">
                        <img src="gharbia.png" alt="" className="flag"/><li className="side" onClick={gharbiaToggle}>Gharbia</li>
                    </div>
                    <div className="gov-list">
                        <img src="giza.png" alt="" className="flag"/><li className="side" onClick={gizaToggle}>Giza</li>
                    </div>
                    <div className="gov-list">
                        <img src="ismailia.png" alt="" className="flag"/><li className="side" onClick={ismailiaToggle}>Ismailia</li>
                    </div>
                    <div className="gov-list">
                        <img src="kafr.png" alt="" className="flag"/><li className="side" onClick={kafrToggle}>Kafr El-Sheikh</li>
                    </div>
                    <div className="gov-list">
                        <img src="luxor.png" alt="" className="flag"/><li className="side" onClick={luxorToggle}>Luxor</li>
                    </div>
                    <div className="gov-list">
                        <img src="matrouh.png" alt="" className="flag"/><li className="side" onClick={matrouhToggle}>Matrouh</li>
                    </div>
                    <div className="gov-list">
                        <img src="menofeya.png" alt="" className="flag"/><li className="side" onClick={menofiaToggle}>Menofia</li>
                    </div>
                    <div className="gov-list">
                        <img src="minya.png" alt="" className="flag"/><li className="side" onClick={minyaToggle}>Minya</li>
                    </div>
                    <div className="gov-list">
                        <img src="newvalley.png" alt="" className="flag"/><li className="side" onClick={newvalleyToggle}>New Valley</li>
                    </div>
                    <div className="gov-list">
                        <img src="northsinai.png" alt="" className="flag"/><li className="side" onClick={northsinaiToggle}>North Sinai</li>
                    </div>
                    <div className="gov-list">
                        <img src="portsaid.png" alt="" className="flag"/><li className="side" onClick={portsaidToggle}>Port Said</li>
                    </div>
                    <div className="gov-list">
                        <img src="qena.png" alt="" className="flag"/><li className="side" onClick={qenaToggle}>Qena</li>
                    </div>
                    <div className="gov-list">
                        <img src="qalyubia.png" alt="" className="flag"/><li className="side" onClick={qualyubiaToggle}>Qualyubia</li>
                    </div>
                    <div className="gov-list">
                        <img src="redsea.png" alt="" className="flag"/><li className="side" onClick={redseaToggle}>Red Sea</li>
                    </div>
                    <div className="gov-list">
                        <img src="sohag.png" alt="" className="flag"/><li className="side" onClick={sohagToggle}>Sohag</li>
                    </div>
                    <div className="gov-list">
                        <img src="southsinai.png" alt="" className="flag"/><li className="side" onClick={southsinaiToggle}>South Sinai</li>
                    </div>
                    <div className="gov-list">
                        <img src="suez.png" alt="" className="flag"/><li className="side" onClick={suezToggle}>Suez</li>
                    </div>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Explore