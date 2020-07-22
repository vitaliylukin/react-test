import React, {Component, Fragment} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import TopPanel from "./components/TopPanel/TopPanel";
import TableCell from "./components/TableCell/TableCell";
import Modal from "./components/Modal/Modal";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

            /*Написать метод, который перебирает массив*/
            cells: new Array(100,).fill('blue', 0, 100),
            playerPoint: 0,
            computerPoint: 0,
            playerName: '',
            changeTime: 2000,
            isOpen: false,
        };
    }

    /*Функция изменения цвета для рандомной ячейки*/
    changeCurrentCell = () => {

        /* this.setState({
             playerPoint: 0,
             computerPoint: 0,
             playerName: '',
             isOpen: false,
             currentCell: null,
             userCell: null,
             errorCell: null,
             prevErrorCell: null,
             winner: false
         });*/

        let random;

        const { cells, playerPoint, computerPoint } = this.state;

        let idInterval = setInterval(() => {

            /*отфильтровать по синим ячейкам*/
            const current = cells.filter((cell) => {
                return cell === 'blue'
            });

            random = Math.floor(Math.random()*cells.length);

            /*console.log(current);*/

            cells[random] = 'yellow';

            this.setState({
                cells: random
                /*переписать под желтую ячейку*/
            });

            if (playerPoint > 9) {
                this.setState({
                    playerName: 'Игрок'
                });
                this.openModal();
                clearInterval(idInterval);
            } else if (computerPoint > 9) {
                this.setState({
                    playerName: 'Компьютер'
                });
                this.openModal();
                clearInterval(idInterval);
            }
            /*console.log(random);*/
        }, this.state.changeTime);
    };

    /*Функция клика по ячейке*/
    onChangeButton(index) {
        const { cells, playerPoint, computerPoint } = this.state;

        if (cells[index] === 'yellow') {
            cells[index] = 'green';
            this.setState({
                cells,
                playerPoint: playerPoint + 1
            });

        } else if (cells[index] !== 'yellow') {
            cells[index] = 'red';
            this.setState({
                cells,
                computerPoint: computerPoint + 1
            });
        }
    };

    /*Функция изменения времени в инпуте*/
    handleInput = (event) => {
        this.setState({
            changeTime: event.target.value
        })
    };

    /*Функция открытия модального окна*/
    openModal = () => {
        this.setState({
            isOpen: true
        });
    };

    handleCancel = () => {
        this.setState({
            playerPoint: 0,
            computerPoint: 0,
            playerName: '',
            isOpen: false,
            currentCell: null,
        });
    };

    render() {

        console.log(this.state.currentCell);

        return (
            <Layout>

                {/*Компонент TopPanel*/}
                <TopPanel
                    playerPoint={this.state.playerPoint}
                    computerPoint={this.state.computerPoint}
                    changeTime={this.handleInput}
                    startGame={this.changeCurrentCell}
                />

                {/*Ячейки таблицы*/}
                <div style={{
                    maxWidth: '700px',
                    margin: '50px auto'
                }}>
                    { this.state.cells.map((cell, index) => {

                        return (
                            <TableCell
                                key={index}
                                name={index + 1}
                                color={cell}
                                isCurrent={index === this.state.currentCell}
                                onChangeButton={this.onChangeButton.bind(this, index)}
                            />
                        )
                    }) }
                </div>

                {/*Модальное окно*/}
                <Fragment>
                    <Modal
                        title="Игра окончена"
                        isOpen={this.state.isOpen}
                        onCancel={this.handleCancel}
                    >
                        <p>Выиграл: {this.state.playerName}</p>
                    </Modal>
                </Fragment>
            </Layout>
        );
    }
}

export default App;