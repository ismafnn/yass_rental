
import * as htmlToImage from "html-to-image";
import Humanize from "humanize-plus";

export function formatNumberAsCurrency(number: number, decimals: number = 2) {
  return Humanize.formatNumber(number, decimals);
}

export async function h2image(html_id: any) {
  const response = await htmlToImage.toPng(html_id);
  let imageBase = response;
  return imageBase;
}