import { Chef } from "@/types";

export function getChefFirstName(chef: Chef | null | undefined): string {
  if (!chef?.name) return "Chef";
  return chef.name.split(" ")[0];
}