import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Air Max 1",
    price: 100000,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f24f923e-f60e-4f65-950d-4591039e8270/air-max-97-shoes-fDLnh1.png",
  },
  {
    id: 2,
    title: "Nike Air Max 2",
    price: 50000,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f24f923e-f60e-4f65-950d-4591039e8270/air-max-97-shoes-fDLnh1.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({ status: 200, message: "success", data: detailProduct });
    }
    return NextResponse.json({ status: 404, message: "Not Found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "success", data: data });
}
