export class ProductModel {
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculatedRating: number;
	description: string;
	advanteges: string;
	disAdvanteges: string;
	categories: string[];
	tags: string[];
	characteristics: {
		[key: string]: string;
	};
}
