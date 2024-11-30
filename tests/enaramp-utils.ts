import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  FillOfframp,
  Initialized,
  Mint,
  NewOfframpRequestCreated,
  NewTaskCreated,
  OwnershipTransferred,
  RequestOfframp,
  RewardsInitiatorUpdated,
  TaskResponded,
  Transfer,
  Withdraw
} from "../generated/enaramp/enaramp"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createFillOfframpEvent(
  requestOfframpId: Bytes,
  receiver: Address,
  proof: Bytes,
  reclaimProof: Bytes
): FillOfframp {
  let fillOfframpEvent = changetype<FillOfframp>(newMockEvent())

  fillOfframpEvent.parameters = new Array()

  fillOfframpEvent.parameters.push(
    new ethereum.EventParam(
      "requestOfframpId",
      ethereum.Value.fromFixedBytes(requestOfframpId)
    )
  )
  fillOfframpEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  fillOfframpEvent.parameters.push(
    new ethereum.EventParam("proof", ethereum.Value.fromFixedBytes(proof))
  )
  fillOfframpEvent.parameters.push(
    new ethereum.EventParam(
      "reclaimProof",
      ethereum.Value.fromFixedBytes(reclaimProof)
    )
  )

  return fillOfframpEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMintEvent(user: Address, amount: BigInt): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintEvent
}

export function createNewOfframpRequestCreatedEvent(
  taskIndex: BigInt,
  task: ethereum.Tuple
): NewOfframpRequestCreated {
  let newOfframpRequestCreatedEvent = changetype<NewOfframpRequestCreated>(
    newMockEvent()
  )

  newOfframpRequestCreatedEvent.parameters = new Array()

  newOfframpRequestCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "taskIndex",
      ethereum.Value.fromUnsignedBigInt(taskIndex)
    )
  )
  newOfframpRequestCreatedEvent.parameters.push(
    new ethereum.EventParam("task", ethereum.Value.fromTuple(task))
  )

  return newOfframpRequestCreatedEvent
}

export function createNewTaskCreatedEvent(
  taskIndex: BigInt,
  task: ethereum.Tuple
): NewTaskCreated {
  let newTaskCreatedEvent = changetype<NewTaskCreated>(newMockEvent())

  newTaskCreatedEvent.parameters = new Array()

  newTaskCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "taskIndex",
      ethereum.Value.fromUnsignedBigInt(taskIndex)
    )
  )
  newTaskCreatedEvent.parameters.push(
    new ethereum.EventParam("task", ethereum.Value.fromTuple(task))
  )

  return newTaskCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRequestOfframpEvent(
  requestOfframpId: Bytes,
  params: ethereum.Tuple
): RequestOfframp {
  let requestOfframpEvent = changetype<RequestOfframp>(newMockEvent())

  requestOfframpEvent.parameters = new Array()

  requestOfframpEvent.parameters.push(
    new ethereum.EventParam(
      "requestOfframpId",
      ethereum.Value.fromFixedBytes(requestOfframpId)
    )
  )
  requestOfframpEvent.parameters.push(
    new ethereum.EventParam("params", ethereum.Value.fromTuple(params))
  )

  return requestOfframpEvent
}

export function createRewardsInitiatorUpdatedEvent(
  prevRewardsInitiator: Address,
  newRewardsInitiator: Address
): RewardsInitiatorUpdated {
  let rewardsInitiatorUpdatedEvent = changetype<RewardsInitiatorUpdated>(
    newMockEvent()
  )

  rewardsInitiatorUpdatedEvent.parameters = new Array()

  rewardsInitiatorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevRewardsInitiator",
      ethereum.Value.fromAddress(prevRewardsInitiator)
    )
  )
  rewardsInitiatorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newRewardsInitiator",
      ethereum.Value.fromAddress(newRewardsInitiator)
    )
  )

  return rewardsInitiatorUpdatedEvent
}

export function createTaskRespondedEvent(
  taskIndex: BigInt,
  task: ethereum.Tuple,
  operator: Address
): TaskResponded {
  let taskRespondedEvent = changetype<TaskResponded>(newMockEvent())

  taskRespondedEvent.parameters = new Array()

  taskRespondedEvent.parameters.push(
    new ethereum.EventParam(
      "taskIndex",
      ethereum.Value.fromUnsignedBigInt(taskIndex)
    )
  )
  taskRespondedEvent.parameters.push(
    new ethereum.EventParam("task", ethereum.Value.fromTuple(task))
  )
  taskRespondedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return taskRespondedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createWithdrawEvent(user: Address, amount: BigInt): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
