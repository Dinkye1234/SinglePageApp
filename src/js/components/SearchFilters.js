import { renderSearchFoodName } from "./searchFoodNameSidebar.js";
import { renderFoodGroupList } from "./searchFoodGroupListSidebar.js";
import { renderSearchSettings } from "./searchSettingsSidebar.js";

export function renderSearchFilters(foodGroups = []) {
  return `
    <aside class="menu">
      ${renderSearchFoodName()}

      ${renderFoodGroupList(foodGroups)}

      ${renderSearchSettings()}
    </aside>
  `;
}
