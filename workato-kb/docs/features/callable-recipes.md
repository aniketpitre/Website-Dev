<!-- source: https://docs.workato.com/en/features/callable-recipes | lastmod: 2026-06-30 -->
> Callable recipes are recipes invoked from another recipe to reuse a repeatable set of steps and keep recipes shorter and easier to maintain.

# Callable recipes by Workato

**Callable recipes** are a type of recipe that can be called from another recipe. This helps to reduce the length of your recipes by separating a repeatable set of actions into a callable recipe that can be called from other recipes that require the same steps.

> **THIS CONNECTOR IS DEPRECATED**
> 
> On **December 3, 2021**, the [**Recipe functions**](/en/connectors/recipe-functions) and [**API platform**](/en/api-mgmt/api-recipes/) connectors replaced Callable recipes by Workato.
> 
> **Existing callable recipes continue to work, but you can't create new ones.**.
> 
> Check out the [migration guide](/en/features/callable-recipes/migrating-to-recipe-functions-api-recipes), [Recipe functions FAQ](/en/features/callable-recipes/recipe-functions-faq), and [API recipes FAQ](/en/api-mgmt/api-recipes/api-recipes-faq) for more info.

A callable recipe is triggered by a call from another recipe instead of a trigger event in an application.

Callable recipes can also be exposed as REST endpoints using the [API Platform feature](/en/api-management).

## Advantages of using callable recipes

| Advantages | Details |
| --- | --- |
| Easier to test | By grouping a set of actions into a separate recipe instead of repeating them in the same recipe, you reduce the effort needed to change and test the steps. |
| More readable | Instead of having really long recipes, break it out into smaller recipes that can be called. |
| Sharing across recipes | If you have a standard error notification policy, you can create a recipe and then have all recipes call this recipe for error notification. |
| Share across accounts and with partners | You can expose REST APIs to your business partners. For example, a REST API that provides inventory status to your suppliers. |

---
