export interface Pokemon { 
    // name: string;
    // url: string;
    // id: number;

    pokedex_id: number;
    category: string;
    name: {
        fr: string;
        jp: string;
    };
    sprites: {
        regular: string;
        shiny: string;
    };
    height: string;
    weight: string;
    stats: {
        atk: number,
        def: number,
        hp: number,
        spe_atk: number,
        spe_def: number,
        vit: number,
    };


}