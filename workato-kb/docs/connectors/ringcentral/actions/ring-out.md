<!-- source: https://docs.workato.com/en/connectors/ringcentral/actions/ring-out | lastmod: 2026-05-22 -->
> Use the Ring out action to make a two-legged RingOut call using RingCentral.

# RingCentral - Ring out action

The **Ring out** action makes a two-legged RingOut call using RingCentral.

## Input

| Field | Description |
| --- | --- |
| Phone number (to) | Enter the recipient's phone number in E.164 format. For example, `+18001237788`. |
| Phone number (from) | Enter the caller's phone number in E.164 format. For example, `+18001237788`. |
| Play prompt | Specify whether to play a prompt requiring you to press **1** before the call connects. |

## Output

| Field | Description |
| --- | --- |
| URI | The URI of the RingOut call. |
| ID | The unique identifier of the RingOut call. |
| Status | An object containing information about the call status. |
| Call status (status) | The status of the call. |
| Caller status (status) | The status of the caller. |
| Callee status (status) | The status of the call recipient. |

---
