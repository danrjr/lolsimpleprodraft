import React, { useEffect, useState } from 'react';
import { data } from '../data/champions';
import './Champion.css';

const Champion = () => {
    const [banBlueSide, setBanBlueSide] = useState(['https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png']);
    const [banRedSide, setBanRedSide] = useState(['https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png']);

    const [pickBlueSide, setPickBlueSide] = useState(['https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png']);
    const [pickRedSide, setPickRedSide] = useState(['https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png', 'https://draftlol.dawe.gg/square.png']);

    const [search, setSearch] = useState('');
    const [filteredChampions, setFilteredChampions] = useState([]);
    const [currentBanRound, setCurrentBanRound] = useState(0); // Estado para rastrear a rodada atual de banimento
    const [selectedRole, setSelectedRole] = useState(''); // Estado para armazenar a role selecionada

    const [roles] = useState([
        { name: "top", code: 'b8751069432fe163496f' },
        { name: "jungle", code: '5e69f9ec34fbe57e75c8' },
        { name: "middle", code: '34427fb8c407c39d57e2' },
        { name: "bottom", code: '21509e3883c16b6fc3d0' },
        { name: "utility", code: 'c5a52aaac8d51b65adf7' }
    ]);
    const patch = "14.24.1";

    const [champion, setChampion] = useState([]);
    const [selectedChampion, setSelectedChampion] = useState(null); // Estado para o campeão selecionado
    const [temporarySelection, setTemporarySelection] = useState(null); // Estado para a seleção temporária

    useEffect(() => {
        const championsWithSelectionState = data.map(champ => ({
            ...champ,
            selected: false,
        }));
        setChampion(championsWithSelectionState);
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Combina a lógica de pesquisa e filtro por categoria
    useEffect(() => {
        let result = champion;
        
        // Filtra campeões pela role selecionada, se houver
        if (selectedRole) {
            result = result.filter((champ) => champ.roles.includes(selectedRole));
        }

        // Filtra campeões pelo termo de busca
        result = result.filter((champ) => champ.name.toLowerCase().includes(search.toLowerCase()));

        setFilteredChampions(result);
    }, [search, selectedRole, champion]);

    const seeIndex = (champ) => {
        setTemporarySelection(champ); // Define o campeão temporário
    
        const newBanBlueSide = [...banBlueSide];
        const newBanRedSide = [...banRedSide];
        const newPickBlueSide = [...pickBlueSide];
        const newPickRedSide = [...pickRedSide];
    
        if (currentBanRound === 0) {
            newBanBlueSide[0] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanBlueSide(newBanBlueSide);
        } else if (currentBanRound === 1) {
            newBanRedSide[4] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanRedSide(newBanRedSide);
        } else if (currentBanRound === 2) {
            newBanBlueSide[1] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanBlueSide(newBanBlueSide);
        } else if (currentBanRound === 3) {
            newBanRedSide[3] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanRedSide(newBanRedSide);
        } else if (currentBanRound === 4) {
            newBanBlueSide[2] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanBlueSide(newBanBlueSide);
        } else if (currentBanRound === 5) {
            newBanRedSide[2] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanRedSide(newBanRedSide);
        } else if (currentBanRound === 6) {
            newPickBlueSide[0] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickBlueSide(newPickBlueSide);
        } else if (currentBanRound === 7) {
            newPickRedSide[0] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickRedSide(newPickRedSide);
        } else if (currentBanRound === 8) {
            newPickRedSide[1] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickRedSide(newPickRedSide);
        } else if (currentBanRound === 9) {
            newPickBlueSide[1] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickBlueSide(newPickBlueSide);
        } else if (currentBanRound === 10) {
            newPickBlueSide[2] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickBlueSide(newPickBlueSide);
        } else if (currentBanRound === 11) {
            newPickRedSide[2] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickRedSide(newPickRedSide);
        } else if (currentBanRound === 12) {
            newBanRedSide[1] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanRedSide(newBanRedSide);
        } else if (currentBanRound === 13) {
            newBanBlueSide[3] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanBlueSide(newBanBlueSide);
        } else if (currentBanRound === 14) {
            newBanRedSide[0] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanRedSide(newBanRedSide);
        } else if (currentBanRound === 15) {
            newBanBlueSide[4] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setBanBlueSide(newBanBlueSide);
        } else if (currentBanRound === 16) {
            newPickRedSide[3] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickRedSide(newPickRedSide);
        } else if (currentBanRound === 17) {
            newPickBlueSide[3] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickBlueSide(newPickBlueSide);
        } else if (currentBanRound === 18) {
            newPickBlueSide[4] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickBlueSide(newPickBlueSide);
        } else if (currentBanRound === 19) {
            newPickRedSide[4] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`;
            setPickRedSide(newPickRedSide);
        }
    };
    

    const confirmSelection = () => {
        if (temporarySelection) {
            const updatedChampions = champion.map(champ => 
                champ.id === temporarySelection.id ? { ...champ, selected: true } : champ
            );
            setChampion(updatedChampions);
    
            // Atualiza a lista filtrada para refletir a mudança de estado
            const result = updatedChampions.filter((champ) => champ.name.toLowerCase().includes(search.toLowerCase()));
            setFilteredChampions(result);

            // Atualiza as listas de banimento/picks com a seleção temporária
            const newBanBlueSide = [...banBlueSide];
            const newBanRedSide = [...banRedSide];
            const newPickBlueSide = [...pickBlueSide];
            const newPickRedSide = [...pickRedSide];

            if (currentBanRound === 0) {
                newBanBlueSide[0] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanBlueSide(newBanBlueSide);
            } else if (currentBanRound === 1) {
                newBanRedSide[4] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanRedSide(newBanRedSide);
            } else if (currentBanRound === 2) {
                newBanBlueSide[1] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanBlueSide(newBanBlueSide);
            } else if (currentBanRound === 3) {
                newBanRedSide[3] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanRedSide(newBanRedSide);
            } else if (currentBanRound === 4) {
                newBanBlueSide[2] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanBlueSide(newBanBlueSide);
            } else if (currentBanRound === 5) {
                newBanRedSide[2] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanRedSide(newBanRedSide);
            } else if (currentBanRound === 6) {
                newPickBlueSide[0] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickBlueSide(newPickBlueSide);
            } else if (currentBanRound === 7) {
                newPickRedSide[0] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickRedSide(newPickRedSide);
            } else if (currentBanRound === 8) {
                newPickRedSide[1] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickRedSide(newPickRedSide);
            } else if (currentBanRound === 9) {
                newPickBlueSide[1] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickBlueSide(newPickBlueSide);
            } else if (currentBanRound === 10) {
                newPickBlueSide[2] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickBlueSide(newPickBlueSide);
            } else if (currentBanRound === 11) {
                newPickRedSide[2] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickRedSide(newPickRedSide);
            } else if (currentBanRound === 12) {
                newBanRedSide[1] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanRedSide(newBanRedSide);
            } else if (currentBanRound === 13) {
                newBanBlueSide[3] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanBlueSide(newBanBlueSide);
            } else if (currentBanRound === 14) {
                newBanRedSide[0] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanRedSide(newBanRedSide);
            } else if (currentBanRound === 15) {
                newBanBlueSide[4] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setBanBlueSide(newBanBlueSide);
            } else if (currentBanRound === 16) {
                newPickRedSide[3] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickRedSide(newPickRedSide);
            } else if (currentBanRound === 17) {
                newPickBlueSide[3] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickBlueSide(newPickBlueSide);
            } else if (currentBanRound === 18) {
                newPickBlueSide[4] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickBlueSide(newPickBlueSide);
            } else if (currentBanRound === 19) {
                newPickRedSide[4] = `https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${temporarySelection.name}.png`;
                setPickRedSide(newPickRedSide);
            }

            // Avança para a próxima rodada
            setCurrentBanRound(currentBanRound + 1);

            // Limpa a seleção temporária após a confirmação
            setTemporarySelection(null);
        }
    };

    return (
        <div>
            <div className="champion_ui">
                <div className="champion_roles">
                {roles.map((role) => (
                    <img
                        key={role.code}
                        src={`https://draftlol.dawe.gg/static/media/position-${role.name}.${role.code}.svg`}
                        alt={role.name}
                        onClick={() => setSelectedRole(selectedRole === role.name ? '' : role.name)}
                        className={selectedRole === role.name ? 'selected_icon' : ''}
                    />
                ))}
                </div>
                <div className="champion_search">
                    <input type="text" value={search} onChange={handleSearch} placeholder="Search Champions..." />
                </div>
            </div>
            <div className="pick_container">
                <div className="pick_blue_side">
                    {pickBlueSide && pickBlueSide.map((pick, index) => (
                        <div key={index} style={{ position: 'relative', marginTop: index === 3 ? '10px' : '0' }}>
                            {(currentBanRound === 6 && index === 0 || currentBanRound == 9 && index === 1  || currentBanRound === 10 && index === 2 || currentBanRound === 17 && index === 3 || currentBanRound === 18 && index === 4) && (
                                <div className="blue_strip"></div>
                            )}
                            <img src={pick} alt="" width="80px" height="82px" className={currentBanRound > 19 ? 'apply_blue_border' : ''} />
                        </div>
                    ))}
                </div>
                <div className="champion_imgs">
                    {filteredChampions && filteredChampions.map((champ, index) => (
                        <div key={champ.id}>
                            <>
                            <img 
                                src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champ.name}.png`} 
                                onClick={() => !champ.selected && seeIndex(champ)}
                                key={index} 
                                alt="" 
                                className={champ.selected ? 'selected' : ''} 
                            />
                            <p className="champ_names">{champ.name === "MonkeyKing" ? "Wukong" : champ.name}</p>
                            </>
                        </div>
                    ))}
                </div>
                <div className="pick_red_side">
                    {pickRedSide && pickRedSide.map((pick, index) => (
                        <div key={index} style={{ position: 'relative', marginTop: index === 3 ? '10px' : '0' }}>
                            {(currentBanRound === 7 && index === 0 || currentBanRound === 8 && index === 1 || currentBanRound === 11 && index === 2 || currentBanRound === 16 && index === 3 || currentBanRound === 19 && index === 4) && (
                                <div className="red_strip"></div>
                            )}
                            <img src={pick} alt="" width="80px" height="82px" className={currentBanRound > 19 ? 'apply_red_border' : ''}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ban_container">
                <div className="ban_blue_side ban_side">
                    {banBlueSide && banBlueSide.map((ban, index) => (
                        <div key={index} style={{ position: 'relative', marginLeft: index === 3 ? '10px' : '0' }}>
                            {(currentBanRound === 0 && index === 0 || currentBanRound === 2 && index === 1 || currentBanRound === 4 && index === 2 || currentBanRound === 13 && index === 3 || currentBanRound === 15 && index === 4) && (
                                <div className="blue_strip"></div>
                            )}
                            <img src={ban} alt="" width="80px" height="82px" className="black_white"/>
                        </div>
                    ))}
                </div>

                <button onClick={confirmSelection} className={currentBanRound > 19 ? 'hidden_button' : ''}>Confirm</button>

                <div className="ban_red_side ban_side">
                    {banRedSide && banRedSide.map((ban, index) => {
                        const reverseIndex = banRedSide.length - 1 - index;
                        return (
                            <div key={reverseIndex} style={{ position: 'relative', marginLeft: index === 2 ? '10px' : '0' }}>       
                                {(currentBanRound === 1 && index === 4 || currentBanRound === 3 && index === 3 || currentBanRound === 5 && index === 2 || currentBanRound === 12 && index === 1 || currentBanRound === 14 && index === 0) && (
                                    <div className="red_strip"></div>
                                )}
                                <img src={ban} alt="" width="80px" height="82px" className="black_white"/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Champion;
