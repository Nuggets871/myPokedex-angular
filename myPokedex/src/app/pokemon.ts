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
    
}